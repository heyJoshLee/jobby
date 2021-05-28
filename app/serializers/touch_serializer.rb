class TouchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :status, :date
end