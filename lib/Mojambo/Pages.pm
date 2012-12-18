package Mojambo::Pages;
use Mojo::Base 'Mojolicious::Controller';

# This action will render a template
sub index {
  my $self = shift;

  # Render template "pages/index.html.ep" 
  $self->render();
}

sub page {
  my $self = shift;

  my $name = $self->param('name');

  # Render $page 
  $self->render_not_found unless
    $self->render(template => "pages/$name");
}

sub save {
  my $self      = shift;

  # array of hashes
  # [{"column":"colum1","portlets":["portlet1","portlet2"]},]
  my $data = $self->req->json;
  
  $self->render_json({answer => "Layout saved."}); 
}

1;
