# Deployment steps

1. update image version in package.json
2. npm run docker:build
3. npm run docker:push
4. update deployment version in deployment.yaml
5. kubectl apply -f deployment.yaml

# Adding MS

1. update PORT in deployment.yaml
2. follow deployment steps

# Adding api path

1. add path in ingress.yaml

# Run application locally

1. TBC
