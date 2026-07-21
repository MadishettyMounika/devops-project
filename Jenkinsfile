pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "yourusername/devops-app:v1"
    }

    stages {

        stage('Clone Code') {
            steps {
                echo 'Cloning repository...'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build --no-cache -t $DOCKER_IMAGE .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop devops-container || true'
                sh 'docker rm devops-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3001:3001 --name devops-container $DOCKER_IMAGE'
            }
        }
    }
}
