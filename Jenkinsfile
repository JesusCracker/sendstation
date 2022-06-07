pipeline {
    // 选择构建节点
    agent any

    environment {
        // harbor info
        harbor_url = "192.168.222.187"
        harbor_repo = "amt/gxdx/fe/industry/login"
        npm_repo = "http://192.168.2.215:9001/repository/npm-public/"
        // k8s info
        namespace = "gxdx"
        service_name = "fe-industry-login"
    }

    stages {

        stage('源码构建') {
            steps {
                script {
                    sh 'npm config set registry ${npm_repo}'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('镜像制作') {
            steps {
                script {
                    sh 'docker build -f Dockerfile -t  ${harbor_url}/${harbor_repo}:${BUILD_NUMBER} .'
                }
            }
        }

        stage('上传镜像') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: '7895d4fa-0d23-45f5-ac5c-3c4946f4646f', passwordVariable: 'password', usernameVariable: 'username')]) {
                      sh 'docker login -u ${username} -p ${password} ${harbor_url}'
                      sh 'docker push ${harbor_url}/${harbor_repo}:${BUILD_NUMBER}'
                    }
                }
            }
        }

        stage('Kubernetes-Test') {
            steps {
                kubernetesDeploy configs:
                    "Deployment.yaml",
                    kubeConfig: [path: ''],
                    kubeconfigId: '03de3a25-1582-4b37-817a-db7ad9b70b43',
                    secretName: '',
                    ssh: [sshCredentialsId: '*', sshServer: ''],
                    textCredentials: [certificateAuthorityData: '', clientCertificateData: '', clientKeyData: '', serverUrl: 'https://']
            }
        }
        stage('打包归档') {
            steps {
                script {
                    sh 'cd dist && zip -rqo dist.zip *'
                }
                archiveArtifacts artifacts: 'dist/*.zip', followSymlinks: false
            }
        }
    }
}