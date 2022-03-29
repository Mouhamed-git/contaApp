pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
       stage ('Checkout') {
            git checkout -b master
        }
        stage ('Initialize') {
            steps {
                sh 'npm install'
            }
       }

        stage ('build') {
           steps {
                sh 'npm run build'
            }
       }

        stage ('deploy') {
           steps {
               sshagent['nginx'] {
                   sh 'rm -rf ubuntu@ec2-54-147-154-125.compute-1.amazonaws.com:~/gestion-app'
                   sh 'scp -o StrictHostKeyChecking=no dist/** ubuntu@ec2-54-147-154-125.compute-1.amazonaws.com:~/'
               }
           }
       }
    }
}
