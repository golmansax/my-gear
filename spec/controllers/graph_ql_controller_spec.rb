require 'rails_helper'

describe GraphQlController do
  describe '#create' do
    it 'raises an error if no query provided' do
      expect do
        post(:create)
      end.to raise_error(ActionController::ParameterMissing)
    end
  end
end
