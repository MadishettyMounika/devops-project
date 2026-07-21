pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build  --no-cache -t devops-app:v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker ps -q | xargs -r docker stop'
                sh 'docker ps -aq | xargs -r docker rm'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3001:3001 devops-app:v1'
            }
        }
    }
}
