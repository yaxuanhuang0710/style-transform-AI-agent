# Use an official Python runtime as a parent image
FROM python:3.12.0

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY requirements.txt /code/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project
COPY . /code/

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run gunicorn
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8000", "server.wsgi:application"]