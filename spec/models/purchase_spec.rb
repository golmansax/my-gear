# frozen_string_literal: true
require 'rails_helper'

describe Purchase do
  describe 'associations' do
    it { is_expected.to belong_to(:clothing_item) }
    it { is_expected.to have_and_belong_to_many(:purposes) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:date) }
    it { is_expected.to validate_presence_of(:version) }
  end
end
