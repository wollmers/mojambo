package Mo::Xitavis;
use Mojo::Base 'Mojolicious::Controller';


sub page {
  my $self = shift;

  my $name = $self->param('name');

  # Render $name 
  $self->render_not_found unless
    $self->render(template => "xitavis/$name");
}

1;
