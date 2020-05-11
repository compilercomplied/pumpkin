
SCRIPT_DIR=$(dirname "$0");

genClaspJson() {

  echo -e "{ \"scriptId\": \"$1\" }" > "$SCRIPT_DIR/.clasp.json"

}

genClaspJson $1