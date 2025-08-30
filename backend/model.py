import pandas as pd
import joblib
import os

class PredictionModel:
    def __init__(self):
        self.model_loaded = False
        if os.path.exists('simple_model.pkl'):
            self.model = joblib.load('simple_model.pkl')
            self.model_loaded = True
            self.feature_columns = ['Clinical_Outcome_Score', 'Customer_Satisfaction', 
                                   'Reimbursement_Coverage_Pct', 'Win_Rate_Pct']
    
    def predict(self, df):
        if self.model_loaded:
            # Use ML model
            X = df[self.feature_columns].fillna(df[self.feature_columns].median())
            predictions = self.model.predict(X)
            probabilities = self.model.predict_proba(X)
            
            # Get most common prediction
            risk_level = pd.Series(predictions).mode()[0]
            confidence = probabilities.max(axis=1).mean()
            
            # Get feature importances for risk factors
            importances = self.model.feature_importances_
            feature_importance = dict(zip(self.feature_columns, importances))
            
            # Generate risk factors based on data and importance
            risk_factors = []
            if feature_importance['Reimbursement_Coverage_Pct'] > 0.2 and df['Reimbursement_Coverage_Pct'].mean() < 80:
                risk_factors.append("Limited reimbursement coverage")
            if feature_importance['Clinical_Outcome_Score'] > 0.2 and df['Clinical_Outcome_Score'].mean() < 75:
                risk_factors.append("Below-average clinical outcomes")
            if feature_importance['Win_Rate_Pct'] > 0.2 and df['Win_Rate_Pct'].mean() < 70:
                risk_factors.append("Low competitive win rate")
            
            return {
                "revenue_risk": risk_level,
                "confidence_score": float(confidence),
                "risk_factors": risk_factors,
                "feature_importance": feature_importance,
                "total_revenue": float(df['Total_Revenue'].sum()) if 'Total_Revenue' in df.columns else 0,
                "ml_model": "Random Forest"
            }
        else:
            # Fallback to rule-based
            risk_score = 0
            risk_factors = []
            
            if 'Clinical_Outcome_Score' in df.columns and df['Clinical_Outcome_Score'].mean() < 75:
                risk_score += 25
                risk_factors.append("Below-average clinical outcomes")
            
            if 'Reimbursement_Coverage_Pct' in df.columns and df['Reimbursement_Coverage_Pct'].mean() < 80:
                risk_score += 30
                risk_factors.append("Limited reimbursement coverage")
            
            if 'Win_Rate_Pct' in df.columns and df['Win_Rate_Pct'].mean() < 70:
                risk_score += 25
                risk_factors.append("Low competitive win rate")
            
            if risk_score >= 60:
                risk_level = "High"
                confidence = 0.88
            elif risk_score >= 30:
                risk_level = "Medium"
                confidence = 0.85
            else:
                risk_level = "Low"
                confidence = 0.82
            
            return {
                "revenue_risk": risk_level,
                "confidence_score": confidence,
                "risk_factors": risk_factors,
                "total_revenue": float(df['Total_Revenue'].sum()) if 'Total_Revenue' in df.columns else 0,
                "ml_model": "Rule-based"
            }
