# install packages
install.packages('tm')
install.packages('wordcloud')
install.packages('RColorBrewer')
install.packages('SnowballC')

# load library
library(tm)
library(wordcloud)
library(RColorBrewer)
library(SnowballC)

# load text
docu <- readLines("~/Dropbox/TIL/14_visualization/stevejobstandford.txt", encoding="UTF-8")
mytext <- Corpus(VectorSource(docu))

# 내용확인
inspect(mytext)

# 공백제거
mytext <- tm_map(mytext, stripWhitespace)
inspect(mytext)

# wordcloud
wordcloud(mytext, scale=c(5, 0.5), 
          max.words=100, random.order=FALSE, rot.per=0.35, 
          use.r.layout=FALSE, color=brewer.pal(8, "Dark2"))

# removing stopwords
mytext <- tm_map(mytext, tolower)
mytext <- tm_map(mytext, removeWords, c("the", "a", "is", "was", "and", "that", "this"))
wordcloud(mytext, scale=c(5, 0.5), 
          max.words=500, random.order=FALSE, rot.per=0.35, 
          use.r.layout=FALSE, color=brewer.pal(8, "Dark2"))