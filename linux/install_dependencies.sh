apt-get install -y curl
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get >get_helm.sh
chmod 700 get_helm.sh
./get_helm.sh
