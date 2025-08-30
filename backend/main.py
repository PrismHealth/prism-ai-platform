from fastapi import FastAPI, File, UploadFile, Query
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
from typing import Optional
from model import PredictionModel
app = FastAPI(title="PRISM AI Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "PRISM AI Platform API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/predict")
async def predict_revenue(
    file: UploadFile = File(...),
    product_category: Optional[str] = Query(None),
    geography: Optional[str] = Query(None),
    customer_segment: Optional[str] = Query(None)
):
    contents = await file.read()
    df = pd.read_csv(io.StringIO(contents.decode('utf-8')))
    
    # Apply filters if provided
    if product_category and 'Product_Category' in df.columns:
        df = df[df['Product_Category'] == product_category]
    if geography and 'Territory' in df.columns:
        df = df[df['Territory'] == geography]
    if customer_segment and 'Customer_Segment' in df.columns:
        df = df[df['Customer_Segment'] == customer_segment]
    
    model = PredictionModel()
    results = model.predict(df)
    
    # Add filter info to results
    results['applied_filters'] = {
        'product_category': product_category,
        'geography': geography,
        'customer_segment': customer_segment
    }
    
    return results

