package Mo;
use Mojo::Base 'Mojolicious';

# This method will run once at server start
sub startup {
  my $self = shift;

  # Documentation browser under "/perldoc"
  $self->plugin('PODRenderer');

  # Router
  my $r = $self->routes;

  # Normal route to controller
  $r->get('/')->to('fixpunkt#index');
  $r->get('/fixpunkt/:name')->to('fixpunkt#page');
  $r->get('/xitavis/*name')->to('xitavis#page');
}

1;
