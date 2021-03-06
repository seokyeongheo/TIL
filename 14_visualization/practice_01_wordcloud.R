# install packages
install.packages('tm')
install.packages('wordcloud')
install.packages('RColorBrewer')
install.packages('SnowballC')
install.packages('KoNLP')
install.packages('rJava')

# load library
library(RColorBrewer)
library(tm)
library(wordcloud)
library(SnowballC)
library(KoNLP)
library(rJava)

# load text
docu <- readLines("~/Dropbox/TIL/14_visualization/stevejobstandford.txt", encoding="UTF-8")
mytext <- Corpus(VectorSource(docu))

# load text_2. 하위 디렉토리 txt 파일을 모두 불러온다
mytext <- Corpus(DirSource("~/Dropbox/TIL/14_visualization/"))

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

