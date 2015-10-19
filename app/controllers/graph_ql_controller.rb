class GraphQlController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def create
    query_string = params.fetch(:query)
    query_variables = params[:query_variables]

    result = MyGearSchema.execute(query_string, variables: query_variables)
    render json: result
  end
end
