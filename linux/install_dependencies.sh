apt-get install -y openssl curl tar gzip bash ca-certificates git
curl https://kubernetes-helm.storage.googleapis.com/helm-v2.7.2-linux-amd64.tar.gz | tar zx
mv linux-amd64/helm /usr/bin/
helm version --client

curl -L -o /usr/bin/kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x /usr/bin/kubectl
kubectl version --client
