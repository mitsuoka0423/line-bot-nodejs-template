let pkgs = import <nixpkgs> {};

in pkgs.mkShell rec {
  name = "devenv";

  buildInputs = with pkgs; [
    nodejs-18_x
    yarn
    nodePackages.typescript
    nodePackages.typescript-language-server
  ];
}
