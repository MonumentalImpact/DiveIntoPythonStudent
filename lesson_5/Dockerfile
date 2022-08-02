FROM python:3.10

RUN apt update && apt upgrade -y
RUN apt install -y vim curl

RUN useradd -m -d /home/student -s /bin/bash student
USER student

ENV PATH=/home/student/.local/bin:$PATH
RUN /usr/local/bin/python -m pip install --upgrade pip
COPY . /home/scouting
WORKDIR /home/scouting
RUN pip install --no-cache-dir -r requirements.txt
