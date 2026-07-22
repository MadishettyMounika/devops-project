pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "madishettymounika/devops-app"
        TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/madishettymounika/devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $DOCKER_IMAGE:$TAG .
                '''
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker push $DOCKER_IMAGE:$TAG
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f devops-container || true
                docker run -d -p 3001:3001 --name devops-container $DOCKER_IMAGE:$TAG
                '''
            }
        }
    }
}
