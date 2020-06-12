FROM python:3.9-alpine

RUN mkdir /app
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .
LABEL maintainer="Omar ElKhatib"

CMD python run app.py
