class GraphQlController < ApplicationController
  def create
    query_string = params.fetch(:query)
    query_variables = params[:query_variables]

    result = MyGearSchema.execute(query_string, variables: query_variables)
    render json: result
  end
end
