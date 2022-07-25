SET CGO_ENABLED=0
SET GOOS=linux
SET GOARCH=arm
set GOARM=5
go build -ldflags -w -o iotfast