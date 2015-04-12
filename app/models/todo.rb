class Todo < ActiveRecord::Base
  validates(:name, :category, {presence: true})
  belongs_to :user
end
