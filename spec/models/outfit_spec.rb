require 'rails_helper'

describe Outfit do
  describe 'associations' do
    it { is_expected.to have_and_belong_to_many(:clothing_items) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end
end
