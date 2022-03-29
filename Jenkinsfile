pipeline {
    agent any
//     tools {
//         nodejs 'nodejs'
//     }
    stages {
        stage ('Checkout') {
          steps {
             // git branch: 'master', url: 'https://github.com/Mouhamed-git/contaApp.git/'
             sh 'git checkout -b master'
          }
     
        }
        stage ('Intialize') {
            steps {
                sh 'npm install'
            }
       }

        stage ('build') {
           steps {
                sh 'npm run build --prod'
            }
       }

        stage ('deploy') {
           steps {
               sshagent(['nginx']) {
                   sh 'rm -rf ubuntu@ec2-35-172-128-125.compute-1.amazonaws.com:~/gestion-app'
                   sh 'scp -o StrictHostKeyChecking=no -r dist/** ubuntu@ec2-35-172-128-125.compute-1.amazonaws.com:~/'
               }
           }
       }
    }
}
