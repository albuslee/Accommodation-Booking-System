import pandas as pd
import os

path = 'csv'
filename = 'transactionInfo.csv'

transactionInfoData = pd.read_csv(os.sep.join([path, filename]))
print (transactionInfoData.columns)
print (transactionInfoData[['accommodationId', 'traveler', 'status', 'createdTime']].head())

transactionInfoData = transactionInfoData.sort_values("createdTime")
print (transactionInfoData[['accommodationId', 'traveler', 'status', 'createdTime']].head())

transactionInfoData.to_csv(os.sep.join([path, filename]),index=False)
