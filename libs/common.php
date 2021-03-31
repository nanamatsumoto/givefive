<?php
function redirect(string $url): void
{
  header("Location: localhost:8888/{$url}");
  exit;
}