class PurchasesController < ApplicationController
  respond_to :json

  def index
    @purchases = Purchase.all
  end
end
