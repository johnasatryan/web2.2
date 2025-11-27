#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

typedef enum
{
  JS_STRING,
  JS_NUMBER,
  JS_BOOLEAN,
  JS_FUNCTION,
  JS_OBJECT,
  JS_ARRAY,
  JS_UNDEFINED
} JSValueType;


typedef struct JSValue {
  JSValueType type;
  union
  {
    char *stringValue;
    double numberValue;
    bool booleanValue;
    struct JSObject *objectValue;
    struct JSArray *arrayValue;
    void (*functionValue)();
  };
} JSValue;


typedef struct JSProperty {
  char *key;
  JSValue value;

} JSProperty;

typedef struct JSObject {
  JSProperty *properties;
  size_t propertyCount;
  struct JSObject *__proto__;
} JSObject;

void greet() {
  printf("Hello world\n");
}

void execution(JSObject* object, char* key) {

  if(!object) {
    return;
  }

  for (int i = 0; i < object->propertyCount; ++i) {   
    if(strcmp(object->properties[i].key, key) == 0) {
      switch (object->properties[i].value.type)
      {
      case JS_STRING:
        printf("%s\n", object->properties[i].value.stringValue);
        break;
      
      case JS_NUMBER:
        printf("%f\n", object->properties[i].value.numberValue);
        break;

       case JS_BOOLEAN:
        printf("%d\n", object->properties[i].value.booleanValue);
        break;
       case JS_FUNCTION:
         object->properties[i].value.functionValue();
         break;
      default:
        printf("undefined");
        break;
      }
    } 
  }
  if(object->prototype) {
    execution(object->prototype, key);
  }
}
void toString() {
  printf("[object Object]\n");
}

int main()
{
  JSProperty *object_properties = (JSProperty *)malloc(sizeof(JSProperty));

  object_properties[0].key = "toString";
  object_properties[0].value.type = JS_FUNCTION;
  object_properties[0].value.functionValue = &toString;
  
  object_properties[1].key = "prototype";
  object_properties[1].value.type = JS_OBJECT;
  object_properties[0].value.objectValue = NULL;
  JSObject *Object = (JSObject *)malloc(sizeof(JSObject));

  Object->properties = object_properties;
  Object->propertyCount = 1;
  Object->prototype = 0;


  JSProperty *properties = (JSProperty *)malloc(sizeof(JSProperty) * 4);
  JSObject *person = (JSObject *)malloc(sizeof(JSObject));

  // name
  properties[0].key = "name";
  properties[0].value.type = JS_STRING;
  properties[0].value.stringValue = "Alice";

  // age
  properties[1].key = "age";
  properties[1].value.type = JS_NUMBER;
  properties[1].value.numberValue = 25;

  // isAdmin
  properties[2].key = "isAdmin";
  properties[2].value.type = JS_BOOLEAN;
  properties[2].value.booleanValue = 0;

  // greet
  properties[3].key = "greet";
  properties[3].value.type = JS_FUNCTION;
  properties[3].value.functionValue = &greet;

  person->properties = properties;

  person->propertyCount = 4;

  person->prototype = Object;

  // execution(person, "name");
  // execution(person, "age");
  // execution(person, "isAdmin");
  // execution(person, "greet");

  execution(person, "toString");
  free(object_properties);
  free(Object);
  free(properties);
  free(person);
}