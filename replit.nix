{ pkgs }: { deps = with pkgs; [
    nodejs-19_x
    nodePackages.typescript-language-server
  ];}
