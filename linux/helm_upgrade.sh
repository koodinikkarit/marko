IMAGE_TAG="$CI_COMMIT_REF_NAME-$CI_COMMIT_SHA"

RELEASE_NAME=$(echo "$CI_COMMIT_REF_NAME" | sed 's/\./-/g')

kubectl get pods

helm list

helm upgrade \
	--wait \
	--set markoImage=jaska/marko:$IMAGE_TAG \
	--install marko-$RELEASE_NAME ./deployment
