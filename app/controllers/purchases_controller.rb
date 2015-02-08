class PurchasesController < ApplicationController
  def index
    @purchases = Purchase.all
    respond_to { |format| format.json }
  end

  def show
    @purchase = Purchase.find(params[:id])
    respond_to { |format| format.json }
  end
end
