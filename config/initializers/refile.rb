require "refile/s3"

aws = {
  access_key_id: "#{ENV['ACCESS_KEY_ID']}",
  secret_access_key: "#{ENV['SECRET_ACCESS_KEY']}",
  region: "sa-east-2",
  bucket: "vocal-in.herokuapp.com",
}
Refile.cache = Refile::S3.new(prefix: "cache", **aws)
Refile.store = Refile::S3.new(prefix: "store", **aws)
