require 'rails_helper'

describe Purchase do
  describe 'associations' do
    it { is_expected.to belong_to(:clothing_item) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:date) }
    it { is_expected.to validate_presence_of(:in_use) }
    it { is_expected.to validate_presence_of(:version) }
  end
end
