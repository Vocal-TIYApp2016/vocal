class LegislatorCollector

  require "json"
def for_session(current_session)
  request = Typhoeus::Request.new(
  "https://api.iga.in.gov/#{current_session}",
  method: :post,
  body: "this is a request body",
  params: { field1: "a field" },
  headers: { Accept: "text/html" }
)
