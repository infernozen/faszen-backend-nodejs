pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                dir('/home/rosandavid155/faszen-backend-nodejs') {
                    git branch: 'main', credentialsId: 'git-credentials', url: 'https://github.com/infernozen/faszen-backend-nodejs.git'
                }
            }
        }
        //add a dependency install stage if needed
        stage('Restart PM2 App') {
            steps {
                script {
                    sh "sudo pm2 reload app"
                    
                }
            }
        }
    }
}
