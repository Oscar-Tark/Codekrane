#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void vuln(char* buffer)
{
	char buff[64];
	strcpy(buff, buffer);
}

int main(int argc, char* argv[])
{
	vuln(argv[1]);
	return 0;
}
