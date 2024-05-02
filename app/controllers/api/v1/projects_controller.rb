class Api::V1::ProjectsController < ApplicationController
  before_action :set_project, only: %i[show destroy]

  def index
    projects = Project.all.order(created_at: :desc)
    render json: projects
  end

  def create
    project = Project.create!(create_params)
    if project
      render json: project
    else
      render json: project.errors
    end
  end

  def show
    render json: @project.as_json(include: {techs: {only: :name}})
  end

  def destroy
    @project&.destroy
    render json: { message: 'Project deleted!' }
  end

  private

  def create_params
    params.permit(:name, :image)
  end

  def set_project
    @project = Project.find(params[:id])
  end
end
