
COMMIT_COMMENT='Commit submitted: '`date`

git add .
git commit -m \'$COMMIT_COMMENT\'
git push origin master 

sleep 3

GIT_REV=`git rev-parse  HEAD`
GIT_REV_SHORT=`git rev-parse --short HEAD`
COMMIT_COMMENT='Commit submitted: '`date`

echo
echo 'Revission ID :' $GIT_REV
echo 'Short rev ID :' $GIT_REV_SHORT
echo

echo tkn pipeline start knative-pipeline  \
  -p application=quarkus-hello-world \
  -p source-repo-url=https://github.com/mmartofel/quarkus-hello-world.git \
  -p source-revision=$GIT_REV\
  -p short-source-revision=$GIT_REV_SHORT \
  -p deployment-repo-url=https://github.com/mmartofel/quarkus-hello-world-deployment.git \
  -p deployment-revision=master \
  -p dockerfile=./src/main/docker/Dockerfile.jvm \
  -p image-registry=image-registry.openshift-image-registry.svc.cluster.local:5000 \
  -p image-repository=cicd \
  -w name=source,claimName=source-pvc \
  -w name=maven-settings,config=maven \
  -w name=knative-kustomize-base,config=knative-kustomize-base \
  -w name=knative-kustomize-environment,config=knative-kustomize-environment \
  -n cicd
