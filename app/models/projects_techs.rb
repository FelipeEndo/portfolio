class ProjectsTechs < ActiveRecord::Base
  belongs_to :project
  belongs_to :tech
end
