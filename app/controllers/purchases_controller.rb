class PurchasesController < ApplicationController
  def index
    @purchases = Purchase.all
    respond_to { |format| format.json }
  end
end
