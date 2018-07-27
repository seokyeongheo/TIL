finishedsquare = ['calculatedfinishedsquarefeet', 'finishedsquarefeet6', 'finishedsquarefeet12',\
                                          'finishedsquarefeet13', 'finishedsquarefeet15']
finishedsquare

finishedsquare_df = df[finishedsquare]
finishedsquare_df.tail()

result_df = pd.merge(taxfamily_df, train_2016_df)
result_df.tail()

result_df.fillna(0, inplace=True)
result_df.isna().sum()

# taxfamily 전체 비교

X = result_df.iloc[:,1:5]
y = result_df.iloc[:,5:6]

model = sm.OLS(y, X)
result = model.fit()
print(result.summary())

# partial regression

X = result_df.iloc[:,1:5]
y = result_df.iloc[:,5:6]

model = sm.OLS(y, X)
result = model.fit()

# taxfamily partial regression (1) taxvaluedollarcnt

fig = sm.graphics.plot_regress_exog(result, "taxvaluedollarcnt")
plt.show()

# taxfamily partial regression plot

fig = plt.figure(figsize=(20, 12))
sm.graphics.plot_partregress_grid(result, fig=fig)
fig.suptitle("")
plt.show()

# taxfamily ccpr plot

fig = plt.figure(figsize=(20, 12))
sm.graphics.plot_ccpr_grid(result, fig=fig)
fig.suptitle("")
plt.show()


'bathroomcnt', 'taxvaluedollarcnt', 'calculatedfinishedsquarefeet'
'numberofstories', 'roomcnt'
