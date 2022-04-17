pipeline {
    agent any
    stages {
        stage ('Checkout-Master-Branch') {
          steps {
            sh 'git checkout master'
          }
        }
      
        stage ('Initialize') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Check-Git-Secret') {
          steps {
            sh 'rm truefflehog.json || true'
            sh 'docker run gesellix/trufflehog --json https://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@github.com/Mouhamed-git/contaApp.git > truefflehog.json'
            sh 'cat truefflehog.json'
          }
        }

        stage ('SCA') {
            steps {
                sh 'npm audit fix --force || true && npm audit || true'
            }
        }
        
        stage ('SAST') {
            steps {
              script {
                def scannerHome = tool 'sonar-scanner';
                withSonarQubeEnv('sonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=devsecops-app -Dsonar.sources=src"
                }
              }
          }
        }
      
//         stage ('Build') {
//            steps {
//                 sh 'npm run build'
//             }
//         }

//         stage ('Deploy') {
//            steps {
//                sshagent(['nginx']) {
//                    sh 'scp -o StrictHostKeyChecking=no -r dist/** ubuntu@ec2-54-174-178-12.compute-1.amazonaws.com:/var/www'
//                }
//            }
//        }
        
//        stage ('DAST') {
//            steps {
//                sshagent(['zap']) {
//                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-54-174-178-12.compute-1.amazonaws.com "docker run -t owasp/zap2docker-stable zap-baseline.py -t http://54.174.178.12/" || true'
//                }
//            }
//        }
       
    }
}
