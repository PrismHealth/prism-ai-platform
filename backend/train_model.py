import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load a sample of data to prevent freezing
df = pd.read_csv('../data/medical_device_data.csv', nrows=5000)

# Create simple risk labels
df['risk_level'] = 'Medium'
df.loc[(df['Clinical_Outcome_Score'] < 70) | (df['Reimbursement_Coverage_Pct'] < 75), 'risk_level'] = 'High'
df.loc[(df['Clinical_Outcome_Score'] > 85) & (df['Reimbursement_Coverage_Pct'] > 90), 'risk_level'] = 'Low'

# Select features
features = ['Clinical_Outcome_Score', 'Customer_Satisfaction', 'Reimbursement_Coverage_Pct', 'Win_Rate_Pct']
X = df[features].fillna(df[features].median())
y = df['risk_level']

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier(n_estimators=50)
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'simple_model.pkl')
print(f"Model trained with accuracy: {model.score(X_test, y_test):.2%}")

