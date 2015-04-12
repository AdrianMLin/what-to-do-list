class AddColumnToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :chance_weight, :float
  end
end
