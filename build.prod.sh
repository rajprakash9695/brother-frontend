

aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 606635781749.dkr.ecr.ap-south-1.amazonaws.com

docker build -t fe-vault .

docker tag fe-vault:latest 606635781749.dkr.ecr.ap-south-1.amazonaws.com/fe-vault:prod

docker push 606635781749.dkr.ecr.ap-south-1.amazonaws.com/fe-vault:prod