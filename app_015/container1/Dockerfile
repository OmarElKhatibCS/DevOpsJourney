FROM python:3.9-rc-alpine

RUN mkdir /app
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .
LABEL maintainer="Omar ElKhatib"

CMD python app.py
