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
        
        stage ('npm audit') {
            steps {
                sh 'npm audit'
            }
        }
        
      
//         stage ('Check-Git-Secret') {
//           steps {
//             sh 'rm truefflehog.json || true'
//             sh 'docker run gesellix/trufflehog --json https://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@github.com/Mouhamed-git/contaApp.git > truefflehog.json'
//             sh 'cat truefflehog.json'
//           }
//         }
      
//         stage ('SCA') {
//           steps {
//             sh 'rm -rf odc-reports/** || true'
//             sh 'curl -o owasp-dependency-check.sh https://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@raw.githubusercontent.com/Mouhamed-git/contaApp/master/owasp-dependency-check.sh?token=GHSAT0AAAAAABRCFFZSRG7DJP4JDCQBCZX2YSEF4GA'
//             sh 'bash owasp-dependency-check.sh'
//             sh 'cat odc-reports/dependency-check-report.json'
//           }
//         }
      
//         stage ('SAST') {
//           steps {
//               script {
//                 def scannerHome = tool 'sonar-scanner';
//                 withSonarQubeEnv('sonarQube') {
//                     sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=devsecops-app -Dsonar.sources=src"
//                 }
//               }
//           }
//         }
      
        stage ('Build') {
           steps {
                sh 'npm run build'
            }
        }

//         stage ('Deploy') {
//            steps {
//                sshagent(['nginx']) {
//                    sh 'scp -o StrictHostKeyChecking=no -r dist/** ubuntu@ ec2-3-83-131-114.compute-1.amazonaws.com:~/'
//                }
//            }
//        }
        
//        stage ('DAST') {
//            steps {
//                sshagent(['zap']) {
//                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-3-84-201-26.compute-1.amazonaws.com 
//                        "docker run -t owasp/zap2docker-stable zap-baseline.py -t http://44.201.89.145/" || true'
//                }
//            }
//        }
       
    }
}
