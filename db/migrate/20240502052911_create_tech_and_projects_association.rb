class CreateTechAndProjectsAssociation < ActiveRecord::Migration[7.1]
  def change
    create_table :projects_techs, id: false do |t|
      t.belongs_to :project
      t.belongs_to :tech
    end
  end
end
