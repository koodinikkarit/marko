IMAGE_TAG="$TRAVIS_BRANCH-$TRAVIS_BRANCH-$TRAVIS_COMMIT"

RELEASE_NAME=$(echo "$TRAVIS_BRANCH" | sed 's/\./-/g')

kubectl get pods

helm list

helm upgrade \
	--wait \
	--set markoImage=jaska/marko:$IMAGE_TAG \
	--install marko-$RELEASE_NAME ./deployment
